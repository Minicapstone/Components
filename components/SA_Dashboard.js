import React, { useState, useEffect, useRef } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

		
export const SA_Dashboard = () => {
  const [newUsers, setNewlUsers] = useState(100);
  const [topPick, setTopPick] = useState(500);
  const [borrowed, setBorrowed] = useState(50);
  const [overdue, setOverdue] = useState(50);
  const options = {
    height: 280,
    axisY: {
        maximum: 30, 
      },

      
    data: [
    {

        type: "column",
        dataPoints: [
            { label: "Monday",  y: 10, color: 'maroon'  },
            { label: "Tuesday", y: 15, color: 'maroon'  },
            { label: "Wednesday", y: 15, color: 'maroon'  },
            { label: "Thursday",  y: 10, color: 'maroon'  },
            { label: "Friday",  y: 10, color: 'maroon'  },
            { label: "Saturday",  y: 3, color: 'maroon'  }
        ]
    }
    ]
}
  


  return (
    <div className="statistics-section">


  <section className="flex justify-center gap-[15vh] mt-5 mb-10">
    <div className="p-12 h-60 w-60 bg-white mx-10 rounded">
      <p className="text-4xl text-center mt-5">{newUsers}</p>
      <p className="center text-lg font-bold text-center my-3">New Users</p>
    </div>

    <div className="p-12 h-60 w-60 bg-white mr-10 rounded">
      <p className="text-4xl text-center mt-5">{topPick}</p>
      <p className="center text-lg font-bold text-center my-3">Top Picked Book</p>
    </div>

    <div className="p-12 h-60 w-60 bg-white mr-10 rounded">
      <p className="text-4xl text-center mt-5">{borrowed}</p>
      <p className="center text-lg font-bold text-center my-3">Borrowed Books</p>
      
    </div>

    <div className="p-12 h-60 w-60 bg-white mr-10 rounded">
      <p className="text-4xl text-center mt-5">{overdue}</p>
      <p className="center text-lg font-bold text-center my-3">Overdue Books</p>
    </div>
  </section>

        
  <section className='flex'>
  <div className="h-[30vh] w-[130vh] bg-white mx-10 rounded-md">
    <p className="center text-lg font-bold text-center my-3">New Users per Day</p>
    <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
    
</div>

        <div className="h-[48vh] w-[80vh] bg-white mx-10 rounded-md">
            <p className="center text-lg font-bold text-center my-10">Top Borrower</p>
            <div className='mx-10 mt-5'>
            <p className='mt-5 px-3 bg-maroon rounded-md text-white'>1. Full Name: <span className='ml-[35vh]'>10 Books</span></p>

            <p className='mt-5 px-3 bg-maroon rounded-md text-white'>2. Full Name: <span className='ml-[35vh]'>7 Books</span></p>

            <p className='mt-5 px-3 bg-maroon rounded-md text-white'>3. Full Name: <span className='ml-[35vh]'>5 Books</span></p>

            <p className='mt-5 px-3 bg-maroon rounded-md text-white'>4. Full Name: <span className='ml-[35vh]'>4 Books</span></p>

            <p className='mt-5 px-3 bg-maroon rounded-md text-white'>5. Full Name: <span className='ml-[35vh]'>2 Books</span></p>
           
            </div>
            
        </div>
  </section>

    </div>
  );
};

