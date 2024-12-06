'use client'

import Image from "next/image"
import HeroImage from "@/public/hero.png"
import { AuthModal } from "./AuthModal"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <svg
          className="h-full w-full"
          fill="none"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_10_20)">
            <g filter="url(#filter0_f_10_20)">
              <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#03FFE0"></path>
              <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8"></path>
              <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4"></path>
              <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#043AFF"></path>
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="720.666"
              id="filter0_f_10_20"
              width="720.666"
              x="-160.333"
              y="-160.333"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
              <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Introducing Cal Ease 1.0
              </span>
            </motion.div>
            <motion.h1
              className="mt-8 text-4xl font-medium tracking-tight text-foreground sm:text-6xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Effortless Scheduling, <span className="text-primary"> Simplified!</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Tired of the hassle of coordinating meetings? With Cal Ease, scheduling is a breeze, giving your clients a seamless way to book time with you.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AuthModal />
            </motion.div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src={HeroImage}
                alt="Hero image"
                priority
                className="relative z-10 w-full rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute -top-4 -right-4 -left-4 -bottom-4 rounded-2xl bg-primary/30 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

