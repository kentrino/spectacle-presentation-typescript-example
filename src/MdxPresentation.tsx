import React from 'react';
import { render } from 'react-dom';

import { MDXProvider } from '@mdx-js/react';

import {
    Deck,
    FlexBox,
    Slide,
    Box,
    Progress,
    FullScreen,
    Notes,
    mdxComponentMap
} from 'spectacle';

// SPECTACLE_CLI_MDX_START
import slides, { notes } from './slides.mdx';
// SPECTACLE_CLI_MDX_END

// SPECTACLE_CLI_THEME_START
const theme = {};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
    <FlexBox
        justifyContent="space-between"
        position="absolute"
        bottom={0}
        width={1}
    >
        <Box padding="0 1em">
            <FullScreen color="#FFFFFFF" size={0}/>
        </Box>
        <Box padding="1em">
            <Progress color="#FFFFFFF" size={0}/>
        </Box>
    </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const MdxPresentation = () => (
    <MDXProvider components={mdxComponentMap}>
        <Deck theme={theme} template={template} loop>
            {slides
                .map((MDXSlide, i) => [MDXSlide, notes[i]])
                .map(([MDXSlide, MDXNote], i) => (
                    <Slide key={`slide-${i}`} slideNum={i}>
                        <MDXSlide />
                        <Notes>
                            <MDXNote />
                        </Notes>
                    </Slide>
                ))}
        </Deck>
    </MDXProvider>
);

export default MdxPresentation
