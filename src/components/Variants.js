const variants ={
    hidden:{
        opacity:0,
        x:'100vw'
    },
    visible:{
        opacity:0,
        x:0,
        transition:{
            type:'spring',
            delay:0.5
        }
    },
    exit:{
        x:'-100vw',
        transition:{ease:'easeInOut'}
      
    }
}
export default variants