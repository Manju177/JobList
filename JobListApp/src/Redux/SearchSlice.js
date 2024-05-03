import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  entities: {},
  role:"",
  salary:'',
  expirence:'',
  locType:[],
  company:'',
  payloadData:[]
}

const SearchsSlice = createSlice({
  name: 'searchs',
  initialState,
  reducers: {
    roleSearch(state, action) {
       state.role = action.payload
    },
    salarySearch(state, action) {
        state.salary = action.payload
    },
    noOfExpirence(state,action){
        state.expirence = action.payload
    },
    LocationTypes(state,action){
        state.locType=action.payload
    },
    searchCompany(state,action){
      state.company=action.payload
    },
    apiData(state,action){
      state.payloadData=action.payload

    }

  }
})

export const { roleSearch, salarySearch,noOfExpirence,LocationTypes,apiData,searchCompany } = SearchsSlice.actions

export default SearchsSlice.reducer