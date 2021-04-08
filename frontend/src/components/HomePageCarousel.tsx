import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import './carousel.scss';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
    // Checkbox,
    // FormControlLabel,
    // Radio,
    // RadioGroup,
    // FormLabel,
    // Slider,
    // IconButton
} from '@material-ui/core';

type animationType = "fade" | "slide" | undefined;

interface BannerExampleProps {
    autoPlay: boolean;
    animation: animationType;
    indicators: boolean;
    timeout: number;
    navButtonsAlwaysVisible: boolean;
    navButtonsAlwaysInvisible: boolean;
    cycleNavigation: boolean;
};
interface BannerExampleState {
    autoPlay: boolean;
    animation: animationType;
    indicators: boolean;
    timeout: number;
    navButtonsAlwaysVisible: boolean;
    navButtonsAlwaysInvisible: boolean;
    cycleNavigation: boolean;
};

interface BannerProps {
    newProp?: React.ReactNode;
    contentPosition: string;
    length?: number;
    item:any
}

function Banner(props: BannerProps) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;
    let items = [];
    const content = (
        <Grid item xs={4} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                {/* <Button variant="outlined" className="ViewButton">
                    View Now
                </Button> */}
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={4} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "Biological Database",
        Caption: "Prostate Cancer",
        contentPosition: "left",
        Items: [
            {
                Name: "Purple Cells Cancer",
                Image: `${process.env.BASE_URL || 'http://localhost:4000'}/static/img/cancer1.jpg`
            },
            {
                Name: "National Cancer Institute",
                Image: `${process.env.BASE_URL || 'http://localhost:4000'}/static/img/nci.jpg`
            }
        ]
    },
    {
        Name: "Fast and Secure",
        Caption: "SQL stuff!",
        contentPosition: "middle",
        Items: [
            {
                Name: "Data Redundancy",
                Image: `${process.env.BASE_URL || 'http://localhost:4000'}/static/img/db1.jpg`
            },
            {
                Name: "Fast and Responsive",
                Image: `${process.env.BASE_URL || 'http://localhost:4000'}/static/img/db2.jpg`
            }
        ]
    },
    {
        Name: "Visualizations",
        Caption: "Modern Visuals!",
        contentPosition: "right",
        Items: [
            {
                Name: "Protein Structures",
                Image: `${process.env.BASE_URL || 'http://localhost:4000'}/static/img/pro1.jpg`
            },
            {
                Name: "Analysis Data",
                Image: `${process.env.BASE_URL || 'http://localhost:4000'}/static/img/pro2.jpg`
            }
        ]
    }
]

class BannerExample extends React.Component<BannerExampleProps, BannerExampleState> {
    constructor(props: BannerExampleProps) {
        super(props);

        this.state = {
            autoPlay: true,
            animation: "fade",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false,
            cycleNavigation: true
        }

        autoBind(this);
    }

    toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators() {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    toggleNavButtonsAlwaysVisible() {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        })
    }

    toggleNavButtonsAlwaysInvisible() {
        this.setState({
            navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
        })
    }

    toggleCycleNavigation() {
        this.setState({
            cycleNavigation: !this.state.cycleNavigation
        })
    }

    changeAnimation(value: animationType) {
        this.setState({
            animation: value
        })
    }

    changeTimeout(event: React.ChangeEvent<any>) {
        this.setState({
            timeout: event.target.value
        })
    }

    render() {
        return (
            <div style={{ marginTop: "50px", color: "#494949" }}>
                <Typography variant="h2"> Our DB</Typography>

                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    cycleNavigation={this.state.cycleNavigation}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                    // next={(now: string, previous: string) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    // prev={(now: string, previous: string) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    // onChange={(now: string, previous: string) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                fullHeightHover={false}
                // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                // indicatorContainerProps={{style: {margin: "20px"}}}
                NextIcon='next'
                >
                    {
                        items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                        })
                    }
                </Carousel>
            </div>

        )
    }
}

export default BannerExample;