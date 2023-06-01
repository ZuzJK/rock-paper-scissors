const computerChosse = (arr: string[]) => {
    /*
        Length is always same, so would be better to use it as global variable,
        use redux, or to use closure. I would love to use that last one, but somehow
        I struggle to use it with react. I can see this is quiet good usecase for them.
        So why I don't just put number? I want to make pure function also when you got technology loan
        you gonna pay for that later. This game also has 5 option version let's say one day I want to
        implement it and what? I will need to change it. 
    */
    const length = arr.length;
    const randomNumber = Math.floor(Math.random() * length);
    return arr[randomNumber];
}

enum Eresult {
    "You lose" = -1,
    "draw",
    "You won"
}

export const handleGame = (e: React.MouseEvent<HTMLDivElement>,arr: string[]) => {
    
    const computer = computerChosse(arr);
    const user = (e.target as HTMLInputElement).value;
    console.info(user)
    let score = 0;
    let result: null | string = null;

    if(user){
    
        if(computer === user) {
            
        }else if (
            (computer === "paper" && user === "rock") ||
            (computer === "rock" && user === "scissors") ||
            (computer === "scissors" && user === "paper")
        ) {
            score--;
        }else {
            score++;
        }
        result = Eresult[score];
    }
    const data = {
        score, 
        user,
        computer,
        result};
    return data;
};