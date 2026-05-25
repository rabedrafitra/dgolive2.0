import Wrapper from '@/app/components/Wrapper'
import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <Wrapper>
        <div className='flex justify-center items-center  h-screen'>
            <SignIn />
        </div>
        </Wrapper>
    )
}

export default page
