import React from 'react'

export const ToggleArea= React.forwardRef((props, ref) =>{
    class ToggleArea extends React.Component {
   
        constructor(props){
            super(props);
            this.state={}
        }
        render() {
        return (
            <div ref={ref} className="toggleArea">
                <div>
                    <div className="toggle-area">
                        <p>{props.text}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
return <ToggleArea />
});

