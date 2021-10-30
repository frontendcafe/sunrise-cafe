import * as React from 'react';
import styled from '@emotion/styled';

const Button = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

function SvgComponent({active}) {
  return (
    <Button>
      <svg
        fill={active ? '#602915' : '#5E3E00'}
        height={27}
        width={32}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M31.165 8.646a.82.82 0 01-.835-.835c0-2.45-5.845-5.177-14.224-5.177-7.57 0-13.138 2.198-14.307 4.342h7.516a.82.82 0 01.835.835.82.82 0 01-.835.835H1.437c-.473 0-.89-.223-1.169-.612-.278-.362-.334-.863-.195-1.28C1.215 3.384 7.951.935 16.106.935 25.153.936 32 3.886 32 7.81a.837.837 0 01-.835.835zm-5.456 11.329a2.32 2.32 0 01-1.642-.696 2.293 2.293 0 01-.668-1.642.82.82 0 01.835-.835c.473 0 .835.39.835.835 0 .167.056.334.195.473a.61.61 0 00.473.195.63.63 0 00.64-.64l.028-4.844c0-.863.473-1.67 1.253-2.06.25-.111.473-.25.668-.39a.82.82 0 011.141.279.82.82 0 01-.278 1.141c-.25.14-.501.306-.78.446a.678.678 0 00-.334.584l-.028 4.843c-.027 1.253-1.057 2.31-2.338 2.31z" />
        <path d="M19.697 22.953a2.32 2.32 0 01-1.642-.696 2.293 2.293 0 01-.668-1.642v-2.31c0-.474.39-.835.835-.835.473 0 .835.39.835.835v2.31c0 .167.055.334.195.473a.61.61 0 00.473.195.63.63 0 00.64-.64v-5.901c0-1.114.807-2.088 1.92-2.283h.028a2.275 2.275 0 011.921.501c.529.446.835 1.114.835 1.81 0 .473-.39.835-.835.835a.837.837 0 01-.835-.835c0-.279-.14-.446-.25-.502-.084-.083-.279-.194-.557-.139h-.028a.687.687 0 00-.557.668l-.028 5.901c.028 1.225-1.002 2.255-2.282 2.255z" />
        <path d="M18.222 16.133a.837.837 0 01-.835-.835.652.652 0 00-.195-.473.657.657 0 00-.445-.195h-1.309a2.343 2.343 0 01-1.948-1.14 2.322 2.322 0 01-.084-2.255l1.977-3.87c.222-.417.723-.584 1.113-.361.418.222.585.723.362 1.113l-1.976 3.869a.626.626 0 00.027.612.655.655 0 00.557.307h1.253c.64 0 1.224.222 1.642.668.445.445.696 1.03.696 1.67 0 .529-.39.89-.835.89zm-5.873-7.487c-.056 0-.112 0-.167-.028-.056 0-.112-.028-.167-.056-.056-.028-.112-.055-.14-.083-.055-.028-.083-.056-.139-.112-.028-.027-.083-.083-.111-.139-.028-.055-.056-.083-.084-.139-.027-.056-.027-.111-.055-.167 0-.056-.028-.111-.028-.167 0-.223.083-.445.25-.584a.606.606 0 01.14-.112c.055-.028.083-.055.139-.083.055-.028.111-.028.167-.056a.825.825 0 01.751.223c.028.028.084.083.112.139.027.056.055.083.083.14.028.055.028.11.056.166 0 .056.028.111.028.167 0 .056 0 .111-.028.167a.395.395 0 01-.056.167.605.605 0 01-.083.14.487.487 0 01-.112.138.65.65 0 01-.556.279zM16.106 26.71c-.557 0-1.085 0-1.642-.027a2.33 2.33 0 01-2.227-2.338l.028-7.627a.82.82 0 01.835-.835c.473 0 .835.39.835.835l-.028 7.627c0 .362.279.668.64.668.53.028 1.058.028 1.56.028 8.378 0 14.223-2.728 14.223-5.178a.82.82 0 01.835-.835.82.82 0 01.835.835c0 3.897-6.847 6.848-15.894 6.848z" />
        <path d="M13.072 20.698H2.551A2.352 2.352 0 01.213 18.36v-7.543a.82.82 0 01.835-.835.82.82 0 01.835.835v7.543c0 .362.306.668.668.668h10.521a.82.82 0 01.835.835.82.82 0 01-.835.835zM31.165 14.213a.82.82 0 01-.835-.835V7.81a.82.82 0 01.835-.835.82.82 0 01.835.835v5.567a.837.837 0 01-.835.835zM31.165 17.553a.758.758 0 01-.585-.25c-.027-.028-.083-.084-.111-.14-.028-.055-.056-.083-.084-.139-.027-.055-.027-.111-.055-.167-.028-.055-.028-.111-.028-.167 0-.223.084-.445.25-.584.307-.307.863-.307 1.17 0 .167.167.25.361.25.584 0 .056 0 .111-.028.167-.028.056-.028.112-.055.167a.607.607 0 01-.084.14c-.028.055-.056.083-.111.139-.084.167-.306.25-.53.25z" />
      </svg>
    </Button>
  );
}

export default SvgComponent;
