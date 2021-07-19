import styled from 'styled-components';
import Box from '../Box';

export const ProfileDepositionBoxWrapper = styled(Box)`
  ul {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    max-height: 220px;
    list-style: none;
  }
  img {
    object-fit: cover;
    padding: 10px;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;  
    display: flex;   
    border-radius: 20px;
  }

  ul li  {
    display: inline-block;    
    display: flex;
    height: 52px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    span {  
      //display: flex;   
      color: #FFFFFF;
      font-size: 10px;
      //position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;