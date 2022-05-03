import { useState } from 'react';

import '../resources/styles/componentStyle/SliderBox.css'
import '../resources/styles/globalStyle/common.css'


function SliderBox({props}) {

    const dummyData = [{
        id: 0,
        heading: 'Course A',
        description: 'This is description to show',
        imageUrl: 'https://media.istockphoto.com/vectors/green-abstract-layers-background-vector-id1296882154?b=1&k=20&m=1296882154&s=612x612&w=0&h=a34Cgu52BgcAz7ldaRNmzgcn7AqjQWOMeN8_YFcl4kw='
    },
    {
        id: 1,
        heading: 'Course B',
        description: 'This is description to show 2',
        imageUrl: 'https://img.freepik.com/free-vector/green-abstract-geometric-background_23-2148370752.jpg?w=2000'
    },
    {
        id: 2,
        heading: 'Course C',
        description: 'This is description to show 3',
        imageUrl: 'https://previews.123rf.com/images/designertimi/designertimi1903/designertimi190300033/124285530-green-watercolor-background-with-light-yellow-hue-abstract-creative-design-with-pastel-colors-vector.jpg'  
    }]

    const dataLength = dummyData.length;
    

    const [objectPresent, setObjectPresent] = useState(dummyData[0]);
    
    const handleOnNext = () => {
        if(objectPresent.id === dataLength - 1){
            setObjectPresent(dummyData[0]);
        }else {
            setObjectPresent(dummyData[objectPresent.id + 1])
        }
    }

    const handleOnPrev = () => {
        if(objectPresent.id === 0){
            setObjectPresent(dummyData[dataLength-1]);
        }else {
            setObjectPresent(dummyData[objectPresent.id - 1])
        }
    }

    return (
        <div className="slider-container-justify margin-32 bor-radius-4">
                <div className="slider-img" style={{
                    backgroundImage: `url(${objectPresent.imageUrl})`
                }}></div>
            <div className="slider-textbox">
                <h1 className="slider-heading">{objectPresent.heading}</h1>
                <p className="slider-heading text-dot-overflow">{objectPresent.description}</p>
            </div>
            <div className="slider-button-wrapper">
                <button onClick={handleOnNext} className="slider-action-button btn-go-backward"> &lt; </button>
                <button onClick={handleOnPrev} className="slider-action-button btn-go-forward"> &gt; </button>
            </div>
        </div>
    )
}

export default SliderBox;