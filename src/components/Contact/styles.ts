import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  header {
    text-align: center;

    h2 {
      text-align: center;
      font-size: 4rem;
    }

    p {
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 35rem;
      gap: 2rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;

      img {
        width: 4rem;
      }

      a {
        color: var(--black);
        font-weight: 500;
      }

      &:hover {
        background-color: var(--pink);

        a {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .contacts {
      flex-direction: column;

      div {
        width: 100%;
      }
    }
  }
`;

/* tombol/link “View Detail” */
export const ButtonLink = styled.a`
  display: block;
  margin: 2rem auto 0 auto;
  width: fit-content;
  background-color: var(--pink);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 1.4rem; /* sama seperti .contacts div */
  font-weight: 500;      /* sama seperti a di dalam .contacts */
  text-decoration: none;
  transition: background-color 0.25s, color 0.25s;

  &:hover {
    background-color: var(--green);
    color: #fff;
  }
`;
