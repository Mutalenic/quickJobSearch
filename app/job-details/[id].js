import { Stack, useRouter, useSearchParams } from "expo-router";
import {SafeAreaView, Text} from "react-native";
import useFetch from '../../hook/UseFetch';
import { COLORS, icons, SIZES } from "../../constants";


const  JobDetails = ()=> {
    const params = useSearchParams();
    const router = useRouter();
    const { data, isLoading, error, refetch} = useFetch('job-details',{
        job_id: params.id
    })
    return (
        <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                
            }}/>

        </SafeAreaView>
    )
}

export default JobDetails;