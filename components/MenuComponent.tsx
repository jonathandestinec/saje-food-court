import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function MenuComponent({ menuImgs }: { menuImgs: string[] }) {
    return (
        <Carousel className="lg:w-2/5 md:w-1/2 w-5/6 ml-auto mr-auto mt-10 mb-16">
            <CarouselContent className=" border-0">
                {menuImgs.map((_, index) => (
                    <CarouselItem key={index} className="">
                        <div className=" bg-transparent">
                            <Card className="">
                                <CardContent className="flex aspect-square items-center justify-center">
                                    <Image src={_} alt="" width={600} height={600} className=" rounded-2xl lg:w-[600px] md:w-[500px] w-full" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className=" bg-emerald-950 ring-1 ring-slate-200 ml-10" />
            <CarouselNext className=" bg-emerald-950 ring-1 ring-slate-200 mr-10" />
        </Carousel>
    )
}
