
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, TimelineMonth, TimelineYear, Resize, DragAndDrop, Inject } from '@syncfusion/ej2-react-schedule';
function App() {
    let scheduleObj;
    function generateStaticEvents(start, resCount, overlapCount) {
        let data = [];
        let id = 1;
        for (let i = 0; i < resCount; i++) {
            let randomCollection = [];
            let random = 0;
            for (let j = 0; j < overlapCount; j++) {
                random = Math.floor(Math.random() * (30));
                random = (random === 0) ? 1 : random;
                if (randomCollection.indexOf(random) !== -1 || randomCollection.indexOf(random + 2) !== -1 ||
                    randomCollection.indexOf(random - 2) !== -1) {
                    random += (Math.max.apply(null, randomCollection) + 10);
                }
                for (let k = 1; k <= 2; k++) {
                    randomCollection.push(random + k);
                }
                let startDate = new Date(start.getFullYear(), start.getMonth(), random);
                startDate = new Date(startDate.getTime() + (((random % 10) * 10) * (1000 * 60)));
                let endDate = new Date(startDate.getTime() + ((1440 + 30) * (1000 * 60)));
                data.push({
                    Id: id,
                    Subject: 'Event #' + id,
                    StartTime: startDate,
                    EndTime: endDate,
                    IsAllDay: (id % 10) ? false : true,
                    ResourceId: i + 1
                });
                id++;
            }
        }
        return data;
    }
    const eventSettings = { dataSource: generateStaticEvents(new Date(2018, 4, 1), 300, 12) }
    const group = { resources: ['Resources'] };

    function generateResourceData(startId, endId, text) {
        let data = [];
        let colors = [
            '#ff8787', '#9775fa', '#748ffc', '#3bc9db', '#69db7c',
            '#fdd835', '#748ffc', '#9775fa', '#df5286', '#7fa900',
            '#fec200', '#5978ee', '#00bdae', '#ea80fc'
        ];
        for (let a = startId; a <= endId; a++) {
            let n = Math.floor(Math.random() * colors.length);
            data.push({
                Id: a,
                Text: text + ' ' + a,
                Color: colors[n]
            });
        }
        return data;
    }
    return (<ScheduleComponent cssClass='virtual-scrolling' ref={schedule => scheduleObj = schedule} width='100%' height='550px' selectedDate={new Date(2018, 4, 1)} eventSettings={
        eventSettings} group={group}>
        <ResourcesDirective>
            <ResourceDirective field='ResourceId' title='Resource' name='Resources' allowMultiple={true} dataSource={generateResourceData(1, 300, 'Resource')} textField='Text' idField='Id' colorField='Color'>
            </ResourceDirective>
        </ResourcesDirective>
        <ViewsDirective>
            <ViewDirective option='TimelineMonth' allowVirtualScrolling={true} isSelected={true} />
            <ViewDirective option='TimelineYear' orientation='Vertical' allowVirtualScrolling={true} />
        </ViewsDirective>
        <Inject services={[TimelineMonth, TimelineYear, Resize, DragAndDrop]} />
    </ScheduleComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
