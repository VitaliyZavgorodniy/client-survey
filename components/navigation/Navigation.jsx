import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

import { DateInput } from "components/inputs/DateInput";
import { ButtonStandard } from "components/buttons/ButtonStandard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt as iconList } from "@fortawesome/free-regular-svg-icons";
import { faQuestionCircle as iconQuestion } from "@fortawesome/free-regular-svg-icons";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";

export const Navigation = () => {
  const router = useRouter();
  const link = router.pathname;

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <Wrapper>
      <Side>
        <Image
          alt='smaki-logo'
          src='/img/smaki-logo.png'
          width={40}
          height={40}
        />
        <Menu>
          <Item>
            <Link href='/admin'>
              <LinkBtn isActive={link === "/admin"}>
                <FontAwesomeIcon size='lg' icon={iconList} />
                <LinkTitle>Оцінки</LinkTitle>
              </LinkBtn>
            </Link>
          </Item>
          <Item>
            <Link href='/admin/responses'>
              <LinkBtn isActive={link === "/admin/forms"}>
                <FontAwesomeIcon size='lg' icon={iconQuestion} />
                <LinkTitle>Відповіді</LinkTitle>
              </LinkBtn>
            </Link>
          </Item>
        </Menu>

        <DateInput />
      </Side>

      <Side>
        <ButtonStandard
          title='Вийти'
          onClick={handleLogout}
          icon={faShareSquare}
        />
      </Side>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: #ed3644;
  box-shadow: 0px 0px 3px 1px #7f7c82;
`;

const Side = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0px 25px;
`;

const Item = styled.li`
  margin-right: 3px;

  &:last-child {
    margin-right: 0px;
  }
`;

const LinkBtn = styled.a`
  padding: 8px 6px;
  color: #FFF;
  background-color: ${(p) => (p.isActive ? "#FF6464" : "tranparent")};
  border-radius: 5px;
  transition: background-color 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    color: #FFF;
    text-decoration: none;
    background-color: #FF6464;
  }
`;

const LinkTitle = styled.span`
  font-family: Nunito, sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-left: 7px;
`;
