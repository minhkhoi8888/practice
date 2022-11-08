import './App.css';
import ModalBox from "./components/Modal";
import { useState, useEffect } from "react";
import { Layout, Avatar, Typography, Col, Row, Image, Button, Spin } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/userSlice';
import { getPhotoFetch } from './redux/photoSclice';


const { Header, Footer, Content } = Layout;
const { Title } = Typography;



function App() {
  const [page, setPage] = useState(2);
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const nameUser = useSelector((state)=>state.user.name);
  const photos = useSelector((state)=>state.photos.photos);
  const isLoading = useSelector((state)=>state.photos.isLoading);
  const LoadingMore = ()=>{
    setPage(state=>state+1);
    dispatch(getPhotoFetch(page))
  }

  useEffect(()=>{
    dispatch(getPhotoFetch(page))
  }, []);
  
  const cols = photos.map((item, index)=>(
    <Image
      key={index}
      style={{
        borderRadius: "14px",
        margin: "13px 0",
      }}
      src={`${item.download_url}`}
    />
  ))
  
  console.log(cols)
  return (
    <div className="App">
      <ModalBox
        open = {open}
        onCreate = {(values) =>{
          setOpen(false);
          dispatch(setUser(values.name));
        }}
        onCancel = {()=>setOpen(false)}
      />
      <Layout>
        <Header
          style={{
            borderRadius: " 0 0 14px 14px",
          }}
        >
          <Avatar
            style={{
              verticalAlign: "middle",
              backgroundColor: "green",
              fontSize: 20
            }}
            size="large"
          >
            {nameUser.slice(0,1).toUpperCase()}
          </Avatar>
          <Title 
            level={4}
            style={{
              display: "inline-block",
              color: "white",
              margin: "0 0 0 10px",
              textAlign: "center",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "40px"
            }}
          > Hola, {nameUser.toUpperCase()}</Title>
        </Header>
        <Content
          style={{
            position: "relative",
            top: "-2%",
            padding: "30px",
          }}
        >
          <Row gutter={26}>
            <Col span={24/4}>
              {cols.slice(0,cols.length/4)}
            </Col>
            <Col span={24/4}>
              {cols.slice(cols.length/4, cols.length/4*2)}
            </Col>
            <Col span={24/4}>
              {cols.slice(cols.length/4*2, cols.length/4*3)}
            </Col>
            <Col span={24/4}>
              {cols.slice(cols.length/4*3, cols.length/4*4)}
            </Col>
          </Row>
          {isLoading ? <Spin></Spin> : <Button onClick={LoadingMore}>Load more...</Button>}
        </Content>
        <Footer> TRUSTKEYS </Footer>
      </Layout>
    </div>
  );
}

export default App;
