import smartpy as sp

#from algosdk.future import transaction
#from algosdk import account, mnemonic
#from algosdk.v2client import algod
#from pyteal import compileTeal, Mode

# Defines the class MyClass and its constructor.
class MyClass(sp.Contract):
    def __init__(self):
        self.init(result = 0)
    # Defines the Smart Contract entry point.
    @sp.entryPoint
    def myEntryPoint(self, params):
        self.data.result = params.op1 + params.op2
        
# Creates the "test" to simulate the Smart Contract call.
@addTest(name = "myFirstSmartContractTest")
def mySmartContractTest():
    # Creates a string variable to build the output.
    html = "/src/main.js"
    # Instantiates an object of class "MyClass".
    mySmartContract = MyClass()
    
    # Calls the "myEntryPoint" method passing parameters.
    html += mySmartContract.myEntryPoint(op1 = 1, op2 = 2).html()
    
    # Outputs the result to screen.
    setOutput(html)
