// use props to tell it what to render 
const DogViewer = ({dog}) => {
    return(
        <img src={dog.message} alt="dog" />
    )
}
export default DogViewer; 