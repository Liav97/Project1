const express = require("express")

const loginRouter = require("./routers/loginRouter")
const departmentsRouter = require("./routers/departmentsRouter")
const employeeRouter = require("./routers/employeesRouter")
const shiftsRouter = require("./routers/shiftsRouter")
const employeeShiftsRouter = require("./routers/employeeShiftsRouter")

const cors = require("cors")

const app = express();

app.use(cors());

app.use(express.json());

require('./configs/database');

app.use('/api/users', loginRouter);
app.use('/api/departments', departmentsRouter);
app.use('/api/employees', employeeRouter);
app.use('/api/shifts', shiftsRouter)
app.use('/api/employeeshifts' , employeeShiftsRouter)

app.listen(8000);