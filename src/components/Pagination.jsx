import React from "react";
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";

const Pagination = ({ page, numOfPages, setPage }) => {
  let Paginate;

  if (numOfPages <= 5) 
  {
    Paginate = [...Array(numOfPages)].map((_, idx) => (
      <button
        key={idx + 1}
        onClick={() => setPage(idx + 1)}
        className={ idx+1 === page ? "page active" : "page"  }
      >
        {idx + 1}
      </button>
    ));
  } 


  else 


  {
    const startValue = Math.floor((page - 1) / 5) * 5;

    Paginate = (
      <>
        {[...Array(5)].map((_, idx) => (
          <button
            key={startValue + idx + 1}
            onClick={() => setPage(startValue + idx + 1)}
            className={ idx+1+startValue === page ? "page active" : "page"  }
          >
            {startValue + idx + 1}
          </button>
        ))}

        <div>...</div>
        <button className={ numOfPages === page ? "page active" : "page"  } onClick={() => setPage(numOfPages)}>{numOfPages}</button>
      </>
    );




    if (page > 5) 
    {



      if (numOfPages - page >= 5) 


      
      {
        Paginate = (
          <>
            <button className={ 1 === page ? "page active" : "page"  } onClick={() => setPage(1)}>1</button>
            <div>...</div>
            <button className={ startValue === page ? "page active" : "page"  } onClick={() => setPage(startValue)}>{startValue}</button>
            
            
            {[...Array(5)].map((_, idx) => (
              <button
                key={startValue + idx + 1}
                onClick={() => setPage(startValue + idx + 1)}
                className={ idx+1+startValue === page ? "page active" : "page"  }
              >
                {startValue + idx + 1}
              </button>
            ))}

            <div>...</div>
            <button className={ numOfPages === page ? "page active" : "page"  } onClick={() => setPage(numOfPages)}>{numOfPages}</button>
          </>
        );
      } 

      else 
      
      {

        
        let amountLeft = numOfPages - page + 5;


        Paginate = (
          <>
            <button className="page" onClick={() => setPage(1)}>1</button>
            <div>...</div>
            <button className="page" onClick={() => setPage(startValue)}>{startValue}</button>
            {[...Array(amountLeft)].map((_, idx) => (
              <button
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                className={ idx+1+startValue === page ? "page active" : "page"  }
                style={
                  numOfPages < startValue + idx + 1 ? { display: "none" } : null
                }
                onClick={() => setPage(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </button>
            ))}
          </>
        );
      }
    }
  }




  return(
    <>
      {
        page !== 1 && <button className="page" onClick={()=>{setPage(page-1)}}>
        <IoIosArrowBack/>
      </button>
      }
      { numOfPages > 1 &&  Paginate}
      {
        page !== numOfPages && <button className="page" onClick={()=>{setPage(page+1)}}>
        <IoIosArrowForward/>
      </button>
      }
    </>
  )
}

export default Pagination;