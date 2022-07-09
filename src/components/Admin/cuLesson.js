import React , {useEffect} from 'react';
import Button from '@mui/material/Button';
import {TextField, TextareaAutosize} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';

export default function FormDialog(reload) {
  const [open, setOpen] = React.useState(false);
  const [name,setName]=React.useState('');
  const [image,setImage]=React.useState('');
  const [description,setDescription]=React.useState('');
  const [cate,setcate] = React.useState([]);
  const [vlselect, setvlselect]=React.useState(cate[0]);
  const [catevaule,setcatevalue]=React.useState([]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSubmit = () => {
    const cateId= catevaule.filter(ob => ob.nameChapter == vlselect)[0].id;
    cate.forEach(a => console.log(a));


     axios.post('https://huy-huan.herokuapp.com/lesson', {
      chapter_id: cateId,
       nameLesson: name,
       linkvideo: image,
       description: description,
     })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
   setOpen(false);
   reload();
  };


  const getData = async () => {
    const res = await fetch("https://huy-huan.herokuapp.com/chapter");
    const datas = await res.json();
    const result =datas.map(ob => {     
      return ob.nameChapter
    })    
    setcatevalue(datas);
    setcate(result)
    
}

useEffect(() => {
getData();
},[])


  const updateInputValueName = (evt) => {
    const val = evt.target.value;
    // ...       
   setName(val);
  }

  const updateInputValueImage = (evt) => {
    const val = evt.target.value;
    // ...       
   setImage(val);
  }
  
  const updateInputValueDescr = (evt) => {
    const val = evt.target.value;
    // ...       
   setDescription(val);
  }
  
  return (
    <div>
      <Button variant="outlined"  style={{marginTop:'60px'}} onClick={handleClickOpen}>
        Thêm mới bài học
      </Button>
      <Dialog  open={open} onClose={handleClose}>
        <DialogTitle>Thêm bài học</DialogTitle>
        <DialogContent style={{ height:'450px' , width:'550px'}}>
        <DialogContentText  >
            Lọai khóa học
          </DialogContentText>
          <Autocomplete 
            onChange={(event, newValue) => {
              console.log(newValue);
              setvlselect(newValue);
            }}
      options={cate}
      fullWidth
      disablePortal
      id="combo-box-demo"
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="khoa hoc" />}
    />
          <DialogContentText   style={{marginTop:'30px'}}>
            Tên bài học
          </DialogContentText>
          <TextField
            value={name}
            onChange={updateInputValueName}
            autoFocus
            margin="dense"
            id="name"
            label="NHập tên bài học"
            fullWidth
            variant="standard"
          />
           <DialogContentText style={{marginTop:'30px'}} >
            LInk video bài học
          </DialogContentText>
          <TextField
             value={image}
             onChange={updateInputValueImage}
            autoFocus
            margin="dense"
            id="name"
            label="NHập link video bài học"
            fullWidth
            variant="standard"
          />
           <DialogContentText style={{marginTop:'30px'}} >
            Mô Tả
          </DialogContentText>
          <TextField
             value={description}
             onChange={updateInputValueDescr}
            autoFocus
            margin="dense"
            id="name"
            label="NHập mô tả"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleSubmit}>THêm mới</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
