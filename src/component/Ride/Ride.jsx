import React from 'react';

const Ride = (props) => {
    const {rideRoute, category} = props
    const imgURL = `../images/${category}.png`
    return (
        <div className="card my-2 p-2">
            <table className="text-center">
                <tbody>
                    <tr>
                        <td width='30%'><img src={imgURL} alt="" width='50px'></img></td>
                        <td width='40%'><span><i class="fas fa-user-friends"></i></span>{rideRoute.capacity}</td>
                        <td width='30%'>$ {rideRoute.rent}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Ride;