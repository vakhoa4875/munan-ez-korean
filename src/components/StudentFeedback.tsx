import { Avatar } from 'primereact/avatar';
import { Carousel } from 'primereact/carousel';
import { Fieldset } from 'primereact/fieldset';
import { useState } from 'react';

export type Feedback = {
    id: string;
    name: string;
    feedback: string;
    role?: string;
    avatar: string;
}

export function StudentFeedback() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>(feedbackData);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const feedbackTemplate = (feedback: Feedback) => {
        const legendTemplate = (
            <div className="flex items-center gap-2 px-1">
                <Avatar image={feedback.avatar} shape="circle" />
                <div className="flex flex-col">
                    <span className="font-bold">{feedback.name}</span>
                    <span className='text-sm text-[var(--primary-color)]'>{feedback.role ?? 'Học viên'}</span>
                </div>
            </div>
        );

        return (
            <div className="card m-2">
                <Fieldset legend={legendTemplate}>
                    <p className="m-0 italic">"{feedback.feedback}"</p>
                </Fieldset>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={feedbacks} numScroll={1} numVisible={4}
                responsiveOptions={responsiveOptions} itemTemplate={feedbackTemplate} />
        </div>
    );
}

export const feedbackData: Feedback[] = [
    {
        id: '1',
        name: 'Sơn Tùng M-TP',
        role: 'Ca sĩ',
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avatar: '/logo.jpg'
    },
    {
        id: '2',
        name: 'John Doe',
        feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        avatar: '/avatars/john.jpg'
    },
    {
        id: '3',
        name: 'Jane Smith',
        feedback: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        avatar: '/avatars/jane.jpg'
    },
    {
        id: '4',
        name: 'Michael Brown',
        feedback: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        avatar: '/avatars/michael.jpg'
    },
    {
        id: '5',
        name: 'Phạm Nhật Vượng',
        role: 'Chủ tịch Vingroup',
        feedback: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        avatar: '/avatars/michael.jpg'
    }
];