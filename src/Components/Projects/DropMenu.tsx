import { CElement, CSSProperties, useEffect, useRef, useState } from "react"

function useClickOutside(ref : any, callback : Function) {

  useEffect(() => {
    function handleClickOutside(event : any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}


interface IDropMenu {
  icon : CElement<any, any>,
  list : string[],
  menuStyle? : CSSProperties,
  callBack : Function
}

const DropMenu = ({icon, list, menuStyle, callBack} : IDropMenu) => {
    const [open, setOpen] = useState(false)
    const lastItem = list.length - 1
    const ref = useRef(null)
  
    const onItemClicked = (index : number) => {
      callBack(index)
      setOpen(false)
    }

    useClickOutside(ref, () => {
        setOpen(false)
    })
  
    return (
      <div ref={ref} className={`relative text-left `}>
        
        <div onClick={() => setOpen(!open)} className="cursor-pointer " >
            { icon }
        </div>
  
        {
          open &&
  
          <div className={`
          absolute z-10 rounded-md bg-gray-700 shadow-lg focus:outline-none w-[180px] overflow-scroll`}
          style={menuStyle}
          >
      
              {
                list.map((item : string, index : number) => (
                  
                  <a key={index} 
                  onClick={() => onItemClicked(index)}
                  className={`block px-4 py-2 text-sm hover:bg-blue-800 cursor-pointer
                  ${index === 0 ? "rounded-t-md" : ""}
                  ${index === lastItem ? "rounded-b-md" : ""}
                  `} >{item}</a>
                ))
              }
        
          
          </div>
        }
  
      </div>
    )
  }

export default DropMenu
