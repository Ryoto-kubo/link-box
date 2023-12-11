import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'

import { Button, Flex, Typography } from '@src/components'
import { mb20, mb32, mb40, mr16 } from '@src/styles/spacing.css'

import {
  firstViewContainer,
  headerContainer,
  logoContainer,
  logoItem,
  mainContainer,
  mainTitleButtonContainer,
  mainTitleContainer,
  perspectiveContainer,
  symbolContainer,
  symbolItem,
} from './styles.css'

export const TopMain = () => {
  const symbolContainerRef = useRef<HTMLImageElement>(null)

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!symbolContainerRef.current) return

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile) return

    // Imageのサイズ
    const imageWidth = 380
    const imageHeight = 380

    // Imageの中心を計算
    const imageCenterX = imageWidth / 2
    const imageCenterY = imageHeight / 2

    // カーソルの現在の位置を取得
    const mouseX = event.clientX
    const mouseY = event.clientY

    // symbolContainerの位置を取得
    const containerBounds = symbolContainerRef.current.getBoundingClientRect()
    const containerX = containerBounds.left
    const containerY = containerBounds.top

    // カーソルがImageの中心からどれだけ動いているかを算出
    const offsetX = mouseX - (containerX + imageCenterX)
    const offsetY = mouseY - (containerY + imageCenterY)

    // offsetYに基づいてX軸の回転角度を計算
    // offsetXに基づいてY軸の回転角度を計算
    const rotateX = Math.min(10, Math.max(-10, -(offsetY / imageCenterY) * 10)) // 符号を反転させました
    const rotateY = Math.min(10, Math.max(-10, (offsetX / imageCenterX) * 10)) // 符号を反転させました

    // symbolContainerRefのrotateXとrotateYを更新
    symbolContainerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  function handleMouseLeave() {
    if (!symbolContainerRef.current) return
    symbolContainerRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
  }

  const router = useRouter()

  return (
    <div>
      <header className={clsx(mb40)}>
        <div className={clsx(headerContainer)}>
          <Flex alignItems='center' justifyContent='spaceBetween'>
            <div className={clsx(logoContainer)}>
              <Image
                src='/images/logo.svg'
                alt='logo'
                width={100}
                height={100}
                className={clsx(logoItem)}
              />
            </div>
            <div>
              <Flex alignItems='center'>
                <div className={clsx(mr16)}>
                  <Button
                    text='Login'
                    color='primary'
                    variant='text'
                    onClick={() => {
                      // this is just for tentative handler
                      router.push('/dashboard')
                    }}
                  />
                </div>
                <div>
                  <Button text='Signup' color='primary' />
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </header>
      <main className={clsx(mainContainer)}>
        <Flex
          alignItems='center'
          justifyContent='spaceBetween'
          className={clsx(firstViewContainer)}
        >
          <div className={clsx(mainTitleContainer)}>
            <Typography variant='h1' className={clsx(mb20)}>
              Manage all links
            </Typography>
            <Typography variant='title' className={clsx(mb32)}>
              All Links can be managed in a Box created by you!
            </Typography>
            <Flex alignItems='center' className={clsx(mainTitleButtonContainer)}>
              <Button text='Install Extension' color='primary' />
            </Flex>
          </div>
          <div className={clsx(perspectiveContainer)}>
            <div
              className={clsx(symbolContainer)}
              ref={symbolContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                id='symbol'
                src='/images/symbol.svg'
                alt='hero'
                width={380}
                height={380}
                className={clsx(symbolItem)}
              />
            </div>
          </div>
        </Flex>
      </main>
    </div>
  )
}
