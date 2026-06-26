import React from 'react';

const page = async ({params}) => {
    return (
        <div>
            This is product details page of {(await params).slug}
        </div>
    );
};

export default page;