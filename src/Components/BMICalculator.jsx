import { Button,
  Flex,
  Container,
  SimpleGrid,
  Center,
  Grid,
  Box,
  Stack,
  Text,
  Heading,
Input } from "@chakra-ui/react";
import {useState} from "react";

function BMICalculator() {
let initState={
  height:"",
  weight:""
}
  const [value,setValue]=useState(initState);
  const [status,setStatus]=useState("");

  function HandleChange(e){
    setValue({
      ...value,
[e.target.name]:Number(e.target.value)
    })
  }

  function HandleSubmit(){
    let height=value.height/100;
    let bmi=value.weight/(height*height)
    setStatus(bmi.toFixed(2));
   console.log( status);
  }

  function HandleReset(){
    setValue({...initState})
    setStatus("")
  }

  return (
  <div style={{backgroundColor:"black"}}>
  <Box textAlign="center" margin="auto" paddingBottom="20px"  width="60%" alignItems="center" justifyContent="center" >
    <Heading>BMI Calculator</Heading>
    <SimpleGrid columns={{base:1,md:1 }} placeItems="center" spacing={10} margin={5} alignItems="center" justifyContent="center" >
      <Input type="number" placeholder="weight in kg" className="weight" value={value.weight} name="weight" onChange={(e)=>HandleChange(e)}/>
      <Input type="number" placeholder="height in cm" className="height" value={value.height} name="height" onChange={(e)=>HandleChange(e)}/>
    </SimpleGrid>
    <Button marginRight="20px" backgroundColor="#FF6129" onClick={HandleSubmit}>Calculate</Button>
    <Button  backgroundColor="#FF6129" onClick={HandleReset}>Reset</Button>
    
    {status && <Grid className="bmi-result">
      <Text className="bmi-value">{status}</Text> </Grid> }
        {status && (status<18.5)?
      <Text className="bmi-status" color="blue">Underweight</Text>:
      (status>=18.5 && status<25)?
      <Text className="bmi-status" color="green">Healthy</Text>
      :(status>=25)?
      <Text className="bmi-status" color="red">Overweight</Text>:"" }
   
  </Box>
  </div>
  )
}

export default BMICalculator;
