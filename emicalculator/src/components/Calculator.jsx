import {
  Box,
  Heading,
  Text,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  HStack,
  useEditable,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Calculator = () => {

  const [principalamt,setPtincipalAmt] = useState("");
  const [interest,setInterest] = useState("");
  const [tenure,setTenure] = useState(12);
  const [loanAmt,setLoanAmt] = useState("");
  const [totalAmount,setTotalAmount] = useState("");

  useEffect(()=>{
    const interestDecimal = +interest/100;
    const monthlyInterestRate = interestDecimal/12;
    let installments = Number(tenure);

    if(principalamt !== ""  && interest !== "" && tenure !== ""){
      let emi = (+principalamt * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -installments))
      const calculatedLoanAmount = emi * installments;
      setLoanAmt(calculatedLoanAmount);
    }else{
      setLoanAmt("");
      setTotalAmount("")
    }
    
  },[principalamt,interest,tenure])

  console.log(loanAmt)

  return (
    <Box>
      <Heading>EMI CALCULATOR</Heading>

      <Box>
        <Text>Principal Amount</Text>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="₹" />
            <Input type="text" placeholder="Amount" value={principalamt} onChange={(e)=>setPtincipalAmt(e.target.value)} />
          </InputGroup>
        </Stack>
      </Box>

      <Box>
        <Text>Interest Rates(%)</Text>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="%" />
            <Input type="text" placeholder="Interest" value={interest} onChange={(e)=>setInterest(e.target.value)} />
          </InputGroup> 
        </Stack>
      </Box>

      <Box>
        <Text>Loan Tenure(In Months)</Text>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="Months" />
            <Input type="text" placeholder="Months" value={tenure} onChange={(e)=>setTenure(e.target.value)} />
          </InputGroup>
        </Stack>
      </Box>
     
     <Box>
       <HStack>
        <Text>Principal Amount</Text>
        <Text>{principalamt}</Text>
       </HStack>
     </Box>

     <Box>
       <HStack>
        <Text>Loan Amount</Text>
        <Text>{loanAmt}</Text>
       </HStack>
     </Box>

     <Box>
       <HStack>
        <Text>Total Payable Amount</Text>
        <Text>{totalAmount}</Text>
       </HStack>
     </Box>

    </Box>
  );
};

export default Calculator;
