'use client'

import { clamp } from "@/lib/utils";
import { StarIcon } from "@heroicons/react/20/solid";

export default function StarRating( {width, height, score, readOnly} : {width: number, height: number, score: number, readOnly?: boolean } ) {
    const starArr = [...Array(5)].map((_) => {
        return {
            width: width,
            height: height,
            active: false,
        }
    })

    const scoreFloored = Math.floor(clamp(score, 1, 5)) // clamp between 1 and 5
    
    for(let i = 0; i < scoreFloored; i++) {
        starArr[i].active = true
    }
    
    return (
        <div className="flex flex-row gap-1">
            {starArr.map( (star, idx) => {
                let fill = '#828282'
                if( star.active )
                    fill = '#FFC41F'
                return <StarIcon key={idx} width={star.width} height={star.width} fill={fill} />
            })}

        </div>
    )
}