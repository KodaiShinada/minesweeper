import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: white;
`

const Board = styled.div`
  position: relative;
  display: row;
  background-color: lightgray;
  border-top: 5px solid white;
  border-right: 5px solid gray;
  border-bottom: 5px solid gray;
  border-left: 5px solid white;
  @media screen and (max-width: 480px) {
    width: 60vh;
    height: 70vh;
  }
  @media screen and (min-width: 481px) {
    width: 80vh;
    height: 95vh;
  }
`
const GameWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  background: white;
  transform: translate(-50%, -50%);
`

const BoardUp = styled.div`
  position: relative;
  display: flex;
  background-color: lightgray;
  border-top: 7px solid gray;
  border-right: 7px solid white;
  border-bottom: 7px solid white;
  border-left: 7px solid gray;
  @media screen and (max-width: 480px) {
    width: 55vh;
    height: 10vh;
  }
  @media screen and (min-width: 481px) {
    width: 74vh;
    height: 17vh;
  }
`

const FaceWrapper = styled.div`
  top: 30;
  width: 90px;
  height: 90px;
  margin: auto;
  background-color: lightgray;
  border-top: 5px solid white;
  border-right: 5px solid gray;
  border-bottom: 5px solid gray;
  border-left: 5px solid white;
  outline: solid 2px gray;
  @media screen and (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
  @media screen and (min-width: 481px) {
    width: 90px;
    height: 90px;
  }
`

const Face = styled.div<{ faceState: number }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
  margin: auto;
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  background-image: url(img.png);
  background-repeat: no-repeat;
  background-size: cover;
  //background-position: -990px 0;
  @media screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
    background-position: ${(props) => (props.faceState + 11) * -40}px 0;
  }
  @media screen and (min-width: 481px) {
    width: 90px;
    height: 90px;
    background-position: ${(props) => (props.faceState + 11) * -90}px 0;
  }
`

const CounterL = styled.div`
  position: relative;
  left: -15px;
  display: flex;
  margin: auto;
  text-align: center;
  background: black;
  border-top: 2px solid gray;
  border-right: 2px solid white;
  border-left: 2px solid gray;
  @media screen and (max-width: 480px) {
    width: 75px;
    height: 45px;
  }
  @media screen and (min-width: 481px) {
    width: 150px;
    height: 90px;
  }
`

const CounterR = styled.div`
  position: relative;
  right: -15px;
  display: flex;
  margin: auto;
  background: black;
  border-top: 2px solid gray;
  border-right: 2px solid white;
  border-left: 2px solid gray;
  @media screen and (max-width: 480px) {
    width: 75px;
    height: 45px;
  }
  @media screen and (min-width: 481px) {
    width: 150px;
    height: 90px;
  }
`

const Count = styled.div`
  position: relative;
  color: red;
  @media screen and (max-width: 480px) {
    top: -11px;
    width: 25px;
    height: 45px;
    font-size: 45px;
  }
  @media screen and (min-width: 481px) {
    top: -20px;
    width: 50px;
    height: 90px;
    font-size: 90px;
  }
`

const BoardUnder = styled.div`
  background-color: lightgray;
  border-top: 0.5vh solid gray;
  border-right: 0.5vh solid white;
  border-bottom: 0.5vh solid white;
  border-left: 0.5vh solid gray;
  @media screen and (max-width: 480px) {
    width: 55vh;
    height: 55vh;
  }
  @media screen and (min-width: 481px) {
    width: 73vh;
    height: 73vh;
  }
`

const Box = styled.div<{ backColor: string }>`
  box-sizing: border-box;
  display: inline-block;
  line-height: 8.5vh;
  color: 'black';
  text-align: center;
  vertical-align: bottom;
  background: ${(props) => props.backColor};
  border-top: ${(props) => (props.backColor === 'lightgray' ? 4 : 1)}px solid
    ${(props) => (props.backColor === 'lightgray' ? 'white' : 'gray')};
  border-right: ${(props) => (props.backColor === 'lightgray' ? 4 : 1)}px solid gray;
  border-bottom: ${(props) => (props.backColor === 'lightgray' ? 4 : 1)}px solid gray;
  border-left: ${(props) => (props.backColor === 'lightgray' ? 4 : 1)}px solid
    ${(props) => (props.backColor === 'lightgray' ? 'white' : 'gray')};
  @media screen and (max-width: 480px) {
    width: 6vh;
    height: 6vh;
    font-size: 10px;
  }
  @media screen and (min-width: 481px) {
    width: 8vh;
    height: 8vh;
    font-size: 30px;
  }
`

const BombBlock = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  overflow: hidden;
  text-align: center;
  text-indent: 100%;
  white-space: nowrap;
  vertical-align: center;
  background-image: url(img.png);
  background-repeat: no-repeat;
  background-position: -300px 0;
`

const Colors = styled.div<{ numColor: number }>`
  display: inline-block;
  width: 30px;
  height: 30px;
  overflow: hidden;
  text-align: center;
  text-indent: 100%;
  white-space: nowrap;
  vertical-align: center;
  background-image: url(img.png);
  background-repeat: no-repeat;
  background-position: ${(props) => (props.numColor - 1) * -30}px 0;
`

const Flags = styled.div<{ numColor: number }>`
  display: inline-block;
  width: 30px;
  height: 30px;
  overflow: hidden;
  text-align: center;
  text-indent: 100%;
  white-space: nowrap;
  vertical-align: center;
  background-image: url(img.png);
  background-repeat: no-repeat;
  background-position: ${(props) => (props.numColor - 4) * -30}px 0;
`

const Home: NextPage = () => {
  // prettier-ignore
  const [board, setBoard] = useState([
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9]
  ])
  const [isPlaying, setIsPlaying] = useState(false)
  const tmpBombs: { y: number; x: number }[] = []
  //爆弾数
  const numberOfBombs = 10
  const [bombs, setBombs] = useState(tmpBombs)
  const [playable, setPlayable] = useState(true)
  const [bombCount, setBombCount] = useState(numberOfBombs)

  const [face, setFace] = useState(0)

  const [count, setCount] = useState(0)

  const countup = () => {
    setCount((count) => count + 1)
  }

  useEffect(() => {
    if (isPlaying) {
      const isPlayingId = setInterval(countup, 1000)
      return () => clearInterval(isPlayingId)
    }
  }, [isPlaying])

  const onClick = (y: number, x: number) => {
    if (!isPlaying && playable) {
      setIsPlaying(true)
      const bombsList: { y: number; x: number }[] = []
      while (bombsList.length < numberOfBombs) {
        const a = Math.floor(Math.random() * 9)
        const b = Math.floor(Math.random() * 9)
        if (!bombsList.some((bomb) => bomb.y === a && bomb.x === b) && !(y === a && x === b)) {
          bombsList.push({ y: a, x: b })
        }
      }
      setBombs(bombsList)
      update(y, x, bombsList)
    } else if (isPlaying) {
      const bombsList: { y: number; x: number }[] = bombs
      update(y, x, bombsList)
    }
  }

  const update = (y: number, x: number, bombsList: { y: number; x: number }[]) => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board))
    if (newBoard[y][x] === 9) {
      const result: number[][] = open(y, x, newBoard, bombsList)
      setBoard(result)
      let BoxCount = 81 - numberOfBombs
      for (let i = 0; i < 9; i++) {
        BoxCount -= result[i].filter(function (a: number) {
          return a < 9
        }).length
      }
      //Game Clear
      if (BoxCount === 0) {
        setIsPlaying(false)
        setFace(1)
        setBombCount(0)
        setPlayable(false)
      }
    }
  }

  const open = (
    y: number,
    x: number,
    newBoard: number[][],
    bombsList: { y: number; x: number }[]
  ) => {
    //Game Over
    for (let i = 0; i < bombsList.length; i++) {
      if (bombsList[i].x === x && bombsList[i].y === y) {
        setIsPlaying(false)
        setFace(2)
        setPlayable(false)
        for (let i = 0; i < bombsList.length; i++) {
          newBoard[bombsList[i].y][bombsList[i].x] = 10
        }
        newBoard[y][x] = 11
        return newBoard
      }
    }

    let num = 0
    const compareList: number[] = [-1, 0, 1]
    for (let i = 0; i < bombsList.length; i++) {
      for (const compareY of compareList) {
        for (const compareX of compareList) {
          if (bombsList[i].x === x + compareX && bombsList[i].y === y + compareY) {
            num++
          }
        }
      }
    }
    newBoard[y][x] = num
    if (num === 0) {
      for (let i = 0; i < bombsList.length; i++) {
        for (const boardY of compareList) {
          for (const boardX of compareList) {
            if (
              newBoard[y + boardY] !== undefined &&
              newBoard[x + boardX] !== undefined &&
              newBoard[y + boardY][x + boardX] === 9 &&
              !(bombsList[i].x === x + boardX && bombsList[i].y === y + boardY)
            ) {
              newBoard = open(y + boardY, x + boardX, newBoard, bombsList)
            }
          }
        }
      }
    }
    return newBoard
  }

  const reset = () => {
    setIsPlaying(false)
    setCount(0)
    setFace(0)
    setBombCount(numberOfBombs)
    setPlayable(true)
    const newBoard: number[][] = JSON.parse(JSON.stringify(board))
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        newBoard[i][j] = 9
      }
    }
    setBoard(newBoard)
  }

  const flag = (y: number, x: number, e: React.MouseEvent) => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board))
    if (isPlaying) {
      if (newBoard[y][x] === 9) {
        newBoard[y][x] = 13
      } else if (newBoard[y][x] === 13) {
        newBoard[y][x] = 12
      } else if (newBoard[y][x] === 12) {
        newBoard[y][x] = 9
      }
      let flagCount = 0
      for (let i = 0; i < 9; i++) {
        flagCount += newBoard[i].filter(function (b: number) {
          return b === 13
        }).length
      }
      setBombCount(numberOfBombs - flagCount)
      setBoard(newBoard)
    }
    e.preventDefault()
  }

  return (
    <>
      <Head>
        <title>Kodai&apos;s Minesweeper</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/tangerine_1f34a.png"
        />
      </Head>
      <Container>
        <Board>
          <GameWrapper>
            <BoardUp>
              <CounterL>
                <Count>{bombCount < -9 ? '-' : 0}</Count>

                <Count>
                  {bombCount < -9
                    ? Math.abs(bombCount - (bombCount % 10))
                    : bombCount < 0
                    ? '-'
                    : bombCount - (bombCount % 10)}
                </Count>

                <Count>{bombCount < 0 ? Math.abs(bombCount % 10) : bombCount % 10}</Count>
              </CounterL>
              <FaceWrapper>
                <Face faceState={face} onClick={() => reset()} />
              </FaceWrapper>
              <CounterR>
                <Count>{((count % 1000) - (count % 100)) / 100}</Count>

                <Count>{((count % 100) - (count % 10)) / 10}</Count>

                <Count>{count % 10}</Count>
              </CounterR>
            </BoardUp>
            <BoardUnder>
              {board.map((row, y) =>
                row.map((num, x) =>
                  num === 10 || num === 11 ? (
                    <Box backColor={num === 10 ? 'silver' : 'red'} key={`${x}-${y}`}>
                      <BombBlock />
                    </Box>
                  ) : (
                    <Box
                      key={`${x}-${y}`}
                      backColor={num < 9 ? 'silver' : 'lightgray'}
                      onClick={() => onClick(y, x)}
                      onContextMenu={(e) => flag(y, x, e)}
                    >
                      {num < 9 ? <Colors numColor={num} /> : num !== 9 && <Flags numColor={num} />}
                    </Box>
                  )
                )
              )}
            </BoardUnder>
          </GameWrapper>
        </Board>
      </Container>
    </>
  )
}

export default Home
