export class Pokemon {
    constructor(
        public name: string,
        public dexNumber: number,
        public currentLevel: number,
        public currentMoves: string[],
        public currentStats: number[],
        public frontImageUrl: string,
        public backImageUrl: string
    ) { }
}
