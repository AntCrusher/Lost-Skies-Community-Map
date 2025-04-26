export type IslandDetails = {
    name: string,
    id: number,
    databanks?: number
    xCoordinate?: number
    yCoordinate?: number
    xPercentage?: number
    yPercentage?: number
    altitude?: number
    difficulty?: number
    ark?: boolean,
    metals: string[],
    wood: string[],
    plants: string[],
    items: string[],
    animals: string[],
    chestItems: string[],
    note?: string
}