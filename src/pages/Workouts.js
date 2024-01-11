import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Workouts = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    const { user } = useAuthContext()
    
    const serverURL = "https://workout-tracker-backend-r7sd.onrender.com/"

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch(`${serverURL}/api/workouts`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        if (user) {
            fetchWorkouts()
        }

    }, [dispatch, user])
    
    return (
        <div className="workouts">
            <div className="workouts-list">
                <span>Workout list for user: <strong>{user.email}</strong></span>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Workouts