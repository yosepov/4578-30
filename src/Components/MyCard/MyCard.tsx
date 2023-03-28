
interface MyCardProps {
    handleOnClick: (text: string) => void;
    text: string;
}



export const MyCard = ({ handleOnClick, text }: MyCardProps) => {

    return <div onClick={() => handleOnClick(text)}>{text}</div>
}
