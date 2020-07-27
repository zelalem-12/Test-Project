import React from 'react';
import styled from 'styled-components';


interface Geo {
    lat: string,
    lng: string
}
interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}
interface UserType {
    id?: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

const Author: React.FC<UserType> = ({ name, username, email, address, phone, website, company }) => {
    return (
        <AuthorWrapper>
            <div>
                <AuthorInfoheader>Basic Information</AuthorInfoheader>
            <p><strong>Name:</strong>{name}</p>
            <p><strong>username:</strong>{username}</p>
            <p><strong>Emial:</strong>{email}</p>
            <p><strong>Phone:</strong>{phone}</p>
            <p><strong>Website:</strong>{website}</p>
            </div> 
            <div>
                <AuthorInfoheader>Address Information</AuthorInfoheader>
                <p><strong>Street:</strong>{address.street}</p>
                <p><strong>Suite:</strong>{address.suite}</p>
                <p><strong>City:</strong>{address.city}</p>
                <p><strong>Zipcode:</strong>{address.zipcode}</p>
                <p><strong>Latitude:</strong>{address.geo.lat}</p>
                <p><strong>Longitude:</strong>{address.geo.lng}</p>
            </div>
            <div>
                <AuthorInfoheader> Compony Information</AuthorInfoheader>
                <p><strong>Name:</strong>{company.name}</p>
                <p><strong>CatchPhrase:</strong>{company.catchPhrase}</p>
                <p><strong>Bussiness:</strong>{company.bs}</p>
            </div>

        </AuthorWrapper>
    )
}

export default Author;


const AuthorWrapper = styled.div`
width: 80%;
margin: 0 10px 30px;
display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 8px;
`

const AuthorInfoheader = styled.h3`
    margin: 0 auto 0 1rem;
    color: green; 
    text-transform: capitalize;

`;