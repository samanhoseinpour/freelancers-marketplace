import { PostForm, Modal } from '@/components';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

const SharePost = async () => {
  const session = await getCurrentUser();

  if (!session?.user) redirect('/');

  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Post</h3>

      <PostForm type="create" session={session} />
    </Modal>
  );
};

export default SharePost;
