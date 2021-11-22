const NewDogButton = ({onDogButtonClicked}) => {

    const handleClick = () => {
        console.log("new dog button clicked");
        onDogButtonClicked();
    }

return(
    <button onClick={handleClick}>Fetch!</button>
)
}
export default NewDogButton;