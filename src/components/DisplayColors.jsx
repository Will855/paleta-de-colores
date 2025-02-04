import SingleColor from './SingleColor';

// eslint-disable-next-line react/prop-types
const DisplayColor = ({ list }) => {
    return (
        <div className="colors-box">
            {
                list.map((color, index)=>(
                    <SingleColor key={index} hexColor={color.hex}/>
                ))
            }
        </div>
    );
}

export default DisplayColor;