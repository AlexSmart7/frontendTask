import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"


const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state)=> state.auth)

  useEffect(()=>{
      if(!user){
        navigate('/login')
      }
  },[user, navigate])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard