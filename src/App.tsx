import React, { useEffect,useState } from "react";
import "./App.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useDispatch, useSelector} from "react-redux"
import {fetchModelsRequest} from "./app/actions/modelActions"
import {RootState} from "./app/reducers/rootReducer"
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme?: any) => ({
  table:{
    minWidth: 650,
  },
  tableContainer: {
    borderRadius:10,
    maxWidth:1000,
    marginTop: 30,
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: "#0e2844",
    
  }
}))

const App: React.FC = ()=> {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [tableDisplay, setTableDisplay] = useState(false);
  var data:any = [] 
  const { pending, models, error } = useSelector(
    (state: RootState) => state.models
  );
  

  useEffect(() => {
  }, [models]);

  
function createData(name:string, height:string, gender:string, birth_year:string, ) {
    return { name, height,gender, birth_year };
  }
function buttonClicked () {
  dispatch(fetchModelsRequest());
  setTableDisplay(true)
}

if(models){
 data = models.map(function(val, index) {
return createData(val.name, val.height, val.gender, val.birth_year)
  })
}

if(error){
  alert("PLEASE CHECK YOUR NETWORK, DATA IS TAKEN FROM LOCAL STORAGE")
}
  return (
    <div className="App">
      <span className="heading">PEOPLE FROM STARWARS</span>
      {tableDisplay? ( <div style={{width:1000, marginTop: 20, display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
        {pending ? (<a onClick={buttonClicked}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       PENDING
    </a>) : (  <a onClick={buttonClicked}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        LOAD AGAIN
    </a>)}
  )
         <TableContainer component={Paper} className = {classes.tableContainer}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className = {classes.tableHeaderCell} sx ={{color: "white",fontWeight: 'bold',}}>Name</TableCell>
            <TableCell className = {classes.tableHeaderCell} sx ={{color: "white",fontWeight: 'bold',}}>Height</TableCell>
            <TableCell className = {classes.tableHeaderCell}sx ={{color: "white",fontWeight: 'bold',}}>Gender</TableCell>
            <TableCell className = {classes.tableHeaderCell}sx ={{color: "white",fontWeight: 'bold',}}>Birth Year </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row:any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx ={{color: "black",fontWeight: 'bold',}}>
                {row.name}
              </TableCell>
              <TableCell >{row.height}</TableCell>
              <TableCell >{row.gender}</TableCell>
              <TableCell  >{row.birth_year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  </div>) : ( <div style={{width:1000, marginTop: 20, display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}> {pending ? (<a onClick={buttonClicked}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       PENDING
    </a>) : (  <a onClick={buttonClicked}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        GET STARWARS PEOPLE
    </a>)} </div>)}

    

  
    </div>
  );
}

export default App;
