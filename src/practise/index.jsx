import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { UserDatasDuplicate } from '../common_files/DummyDataJS';
import { Button } from '@mui/material';
import { AccessData } from '../common_files/Accessibility';


function createData(first_name, last_name, dob, mobile, address, city, state, occupation, gender, blood_group, profile, age, marital_status, email_id) {
  return { first_name, last_name, dob, mobile, address, city, state, occupation, gender, blood_group, profile, age, marital_status, email_id };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function UserList() {
  const [userData, setUserDatas] = React.useState([])
  const [isSorted, setIsSorted] = React.useState(true)

  React.useEffect(() => {
    setUserDatas(UserDatasDuplicate)
  }, [])


 
  const handleSort = () => {
    const sortedData = [...userData].sort((a, b) => {
      const dateA = new Date(a.dob);
      const dateB = new Date(b.dob);
      console.log('dataA', dateA, 'dateB', dateB);
      return isSorted ? dateA - dateB : dateB - dateA;
    });
    console.log('sortDat', sortedData);
    setUserDatas(sortedData);
    setIsSorted(!isSorted);
  };

  console.log('isSort', isSorted);
  return (
    <>
    <Button variant='outlined' onClick={handleSort}>{isSorted? "Ascending" : "Descending"}</Button>
    <TableContainer sx={{ width: '100%' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.NO</TableCell>
            <TableCell>Profile</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Occupation</TableCell>
            <TableCell>Blood Group</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((row, index) => (
            <>
              <TableRow
                key={row.id}

              >
                <TableCell >{index + 1}</TableCell>
                <TableCell>
                  {!row?.profile ? <img src={AccessData?.user_image_path} alt='profile'
                    style={{ width: '50px', height: '50px' }} /> :
                    <img src={row?.profile} alt='profile'
                      style={{ width: '50px', height: '50px' }} />

                  }
                </TableCell>
                <TableCell component="th" scope="row">
                  {row?.first_name + row?.last_name}
                </TableCell>
                <TableCell>{row?.dob}</TableCell>
                <TableCell>{row?.mobile}</TableCell>
                <TableCell>{row?.email_id}</TableCell>
                <TableCell>{row?.city}</TableCell>
                <TableCell>{row?.occupation}</TableCell>
                <TableCell>{row?.blood_group}</TableCell>
                <TableCell>{row?.gender}</TableCell>
                <TableCell sx={{ display: 'flex', gap: '2em', padding: '30px' }}>
                  <Button variant="contained" color="warning">Edit</Button>
                  <Button variant="outlined" color="error">Delete</Button>
                </TableCell>


              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}