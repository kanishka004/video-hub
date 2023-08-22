import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: 'uppercase',
  p: '4',
  size: '4xl'
};

const Home = () => {
  return <Box>

    <MyCarousel />

    <Container maxW={'container.xl'} minH={'100vh'} p="16">
      <Heading
        textTransform={"uppercase"}
        py="2"
        w={"fit-content"}
        borderBottom={'2px solid'}
        m={"auto"}>
        Services
      </Heading>

      <Stack
        h="full"
        p={'4'}
        alignItems={'center'}
        direction={['column', 'row']}>

        <Image src={"https://media.istockphoto.com/id/1215275724/vector/informative-flyer-service-promotion-cartoon-flat.jpg?s=612x612&w=0&k=20&c=wvbroe7YpCQqCMbAOXQLal9kHZbHX_hc1209i6uE8Zs="} h={['40', '400']} filter={'hue-rotate(-10deg)'} />

        <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at adipisci, tenetur velit in accusantium beatae, non voluptate vitae nihil dignissimos ea nemo ipsam dolorum voluptatem, soluta eligendi quos. At asperiores eveniet provident dignissimos animi cum repellat, sapiente sequi tempore ducimus velit, dolores pariatur dolor nobis harum maiores tempora! Mollitia maxime inventore sapiente cum optio esse repellat at quas eligendi sunt veniam porro alias omnis modi quaerat in quo repellendus eveniet odio aliquam provident cupiditate, reprehenderit officia distinctio. Alias voluptas praesentium aperiam aspernatur libero reiciendis, doloremque accusantium quisquam! Magnam laboriosam tempora eaque vel omnis, alias adipisci asperiores in iure ab id saepe natus culpa repellendus rerum placeat voluptatibus atque, pariatur ratione nam inventore? Doloribus maxime quam dignissimos repellat quod.
        </Text>
      </Stack>

    </Container>

  </Box>
};


const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}>

    <Box w="full" h={'100vh'}>
      <Image src={"https://media.istockphoto.com/id/1479076658/photo/robotic-hand-pressing-a-keyboard-on-a-laptop-3d-rendering.webp?b=1&s=612x612&w=0&k=20&c=vU6_unn79ax-8ATbefa-NB7cHUx7R2CAuvfnWG2jZaA="} />
      <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions}>
        Future is A.I
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={"https://media.istockphoto.com/id/1010650972/photo/professional-gamer-playing-and-winning-in-first-person-shooter-online-video-game-on-his.jpg?s=612x612&w=0&k=20&c=254BCWqeVvdxD1aefoeKe2J4SiGDvy2JP82Z3jzHCu0="} />
      <Heading bgColor={'whiteAlpha.800'} color={"black"} {...headingOptions}>
        Gamers don't die
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={"https://media.istockphoto.com/id/1319479588/photo/the-musicians-were-playing-rock-music-on-stage-there-was-an-audience-full-of-people-watching.jpg?s=612x612&w=0&k=20&c=OrGoVzFYygF904aMkM38N_v53yyBI5D_aWkpZZhTvEY="} />
      <Heading bgColor={'whiteAlpha.700'} color={"black"} {...headingOptions} fontSize={'4.2rem'}>
        Life begins at night
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={"https://media.istockphoto.com/id/1180012633/photo/young-couple-watching-the-perseids-meteor-shower-and-the-milky-way.jpg?s=612x612&w=0&k=20&c=WWeLyMc85O7QFFogmKRwaqiux7pjE6ieW7LJWIsr2vI="} />
      <Heading bgColor={'whiteAlpha.700'} color={"black"} {...headingOptions}>
        Watch the stars
      </Heading>
    </Box>

  </Carousel>
);

export default Home