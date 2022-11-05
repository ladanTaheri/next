export const stringFormatToArrayFormat = str => {
    if (str==="")
    {
        return [];
    }
    if (str!=="")
    {
        return str.split(';');
    }

}
