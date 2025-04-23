import { Comment, Reply } from '../types/blog.types';

// Sample comments for testing
const sampleComments: Record<string, Comment[]> = {
  '1': [
    {
      id: 'c1',
      postId: '1',
      author: 'Alice Johnson',
      authorAvatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      content: 'Great article! I learned a lot about React.',
      createdAt: new Date('2023-05-16T10:30:00'),
      replies: [
        {
          id: 'r1',
          commentId: 'c1',
          author: 'John Doe',
          authorAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
          content: 'Thanks Alice! Glad you found it helpful.',
          createdAt: new Date('2023-05-16T11:15:00'),
        }
      ]
    },
    {
      id: 'c2',
      postId: '1',
      author: 'Bob Williams',
      authorAvatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      content: 'Could you explain more about React hooks?',
      createdAt: new Date('2023-05-17T09:45:00'),
      replies: []
    }
  ],
  '2': [
    {
      id: 'c3',
      postId: '2',
      author: 'Emma Davis',
      authorAvatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      content: 'I visited Vietnam last year and it was amazing!',
      createdAt: new Date('2023-06-23T14:20:00'),
      replies: []
    }
  ]
};

// Counter for generating new IDs
let commentIdCounter = 10;
let replyIdCounter = 10;

/**
 * Get all comments for a specific blog post
 * @param postId - ID of the blog post
 * @returns Promise resolving to an array of comments
 */
export const getCommentsByPostId = async (postId: string): Promise<Comment[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return sampleComments[postId] || [];
};

/**
 * Add a new comment to a blog post
 * @param postId - ID of the blog post
 * @param content - Content of the comment
 * @returns Promise resolving to the newly created comment
 */
export const addComment = async (postId: string, content: string): Promise<Comment> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Create a new comment
  const newComment: Comment = {
    id: `c${++commentIdCounter}`,
    postId,
    author: 'Current User', // In a real app, this would come from authentication
    authorAvatar: 'https://randomuser.me/api/portraits/men/10.jpg', // Placeholder
    content,
    createdAt: new Date(),
    replies: []
  };
  
  // Add to the sample comments
  if (!sampleComments[postId]) {
    sampleComments[postId] = [];
  }
  sampleComments[postId].push(newComment);
  
  return newComment;
};

/**
 * Add a reply to an existing comment
 * @param postId - ID of the blog post
 * @param commentId - ID of the parent comment
 * @param content - Content of the reply
 * @returns Promise resolving to the newly created reply
 */
export const addReply = async (postId: string, commentId: string, content: string): Promise<Reply> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Create a new reply
  const newReply: Reply = {
    id: `r${++replyIdCounter}`,
    commentId,
    author: 'Current User', // In a real app, this would come from authentication
    authorAvatar: 'https://randomuser.me/api/portraits/men/10.jpg', // Placeholder
    content,
    createdAt: new Date()
  };
  
  // Find the comment and add the reply
  const comments = sampleComments[postId] || [];
  const comment = comments.find(c => c.id === commentId);
  
  if (comment) {
    if (!comment.replies) {
      comment.replies = [];
    }
    comment.replies.push(newReply);
  } else {
    throw new Error(`Comment with ID ${commentId} not found`);
  }
  
  return newReply;
};