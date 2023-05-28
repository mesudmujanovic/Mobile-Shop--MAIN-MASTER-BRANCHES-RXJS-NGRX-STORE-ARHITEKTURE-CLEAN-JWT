package mobileshop.Service;

import mobileshop.Infrastucture.Dto.CommentLikeDto;

import java.util.List;

public interface CommentLikeService {

    public CommentLikeDto saveCommentLike(CommentLikeDto commentLikeDto);

    public List<CommentLikeDto> getAllCommLike();
}
