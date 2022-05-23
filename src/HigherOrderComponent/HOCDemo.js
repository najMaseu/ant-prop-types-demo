import { Image } from "antd";
import { useEffect, useState } from "react";
import { getRandomDogData } from "../api/dogCEO";
import { Row, Col } from "antd";
import PropTypes from 'prop-types';

export const DogPhoto = ({ breed }) => {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const dogData = await getRandomDogData(breed);
        setDogUrl(dogData.message);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);

  return (
    <Row>
      <Col span={24}>
        <Image data-cy={"doggo"} preview={false} src={dogUrl} />
      </Col>
    </Row>
  );
};

// PropTypes will ignore data attributes
DogPhoto.propTypes = {
  breed: PropTypes.string
}

// Why data-testid isnt working?
const withShibaBreed = (Component) => () => <Component breed={"shiba"} data-testId={"shiba"}/>;

// Whaaat? What is Hoc?
export const ShibaPhoto = withShibaBreed(DogPhoto);
