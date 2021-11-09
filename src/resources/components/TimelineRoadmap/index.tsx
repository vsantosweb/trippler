import React from 'react';
import moment from 'moment';

import * as Styled from './styles';

const TimelineRoadmap: React.FC = ({ data }: any) => {
    return <Styled.TimelineContent>
        <Styled.TimeLine>
            <Styled.TimelineHeader>
                {/* <Styled.RoadmapTitle>Roteiro Arraial do cabo e macaé</Styled.RoadmapTitle> */}
            </Styled.TimelineHeader>

            <Styled.TimelineList>
                {data.steps.map(step =>

                    <Styled.TimeLineItem>
                        <Styled.TimelineIcon> <i className={'las la-calendar'}></i> </Styled.TimelineIcon>
                        <Styled.TimelineEventDate>{moment(step.event_date).format('dddd')}</Styled.TimelineEventDate>
                        <Styled.TimeLineItemTitle style={{ fontWeight: 'bold' }}>{step.title}</Styled.TimeLineItemTitle>
                        <Styled.TimeLineItemValueList>
                            {step.values.map(value => <Styled.TimeLineItemValueItem>{value.values}</Styled.TimeLineItemValueItem>)}
                        </Styled.TimeLineItemValueList>
                    </Styled.TimeLineItem>
                )}

            </Styled.TimelineList>
        </Styled.TimeLine>
    </Styled.TimelineContent>;
}

export default TimelineRoadmap;