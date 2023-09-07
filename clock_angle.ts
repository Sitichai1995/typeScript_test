function getClockAngle(hh_mm:string):number {
    // delete :
    let arr:string[] = hh_mm.split(':')

    //convert to number
    let hour: number = parseInt(arr[0], 10);
    let minute: number = parseInt(arr[1], 10);


    //find angle
    let minuteAngle:number = minute * 6

    //check hour > 12
    let hourAngle:number = (hour % 12) * 30 + (minute * 0.5)

    //clockAngle can't minus
    let clockAngle:number = Math.abs(hourAngle - minuteAngle) 

    //need smaller (<=180)
    if (clockAngle > 180){
        return 360 - clockAngle;
    }
    return  clockAngle

    }

    console.log(getClockAngle('22:48'));