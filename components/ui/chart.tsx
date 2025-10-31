"use client"

import * as React from "react"

export type ChartConfig = Record<
  string,
  {
    label: string
    color: string
  }
>

type ChartContainerProps = {
  config: ChartConfig
  children: React.ReactNode
}

export function ChartContainer({ config, children }: ChartContainerProps) {
  return (
    <div className="w-full">
      {children}
    </div>
  )
}

export function ChartTooltip({ cursor, unknow }: any) {
  return unknow
}

export function ChartTooltipContent() {
  return (
    <div className="bg-white dark:bg-gray-700 p-2 rounded shadow text-sm">
      Tooltip
    </div>
  )
}
