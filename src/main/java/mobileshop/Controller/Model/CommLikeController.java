package mobileshop.Controller.Model;

import mobileshop.Infrastucture.DTO.CommentLikeDto;
import mobileshop.Infrastucture.Request.CommentLikeRequest;
import mobileshop.Infrastucture.Response.CommentLikeResponse;
import mobileshop.Service.CommentLikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController()
@CrossOrigin("*")
@RequestMapping("/api")
public class CommLikeController {

    @Autowired
    private CommentLikeService commentLikeService;

    @PostMapping("/com-like")
    public ResponseEntity<CommentLikeResponse> saveCommLike(CommentLikeRequest commentLikeRequest){
        CommentLikeDto commentLikeDto = CommentLikeDto.fromRequestToDto(commentLikeRequest);
        CommentLikeDto saveComLike = commentLikeService.saveCommentLike(commentLikeDto);
        return ResponseEntity.ok(saveComLike.fromDtoToResponse());
    }

    @GetMapping("/allComLike")
    public ResponseEntity<List<CommentLikeResponse>> getAll (){
        List<CommentLikeDto> commentLikeDtoList = commentLikeService.getAllCommLike();
        return ResponseEntity.ok(commentLikeDtoList.stream().map(CommentLikeDto::fromDtoToResponse).collect(Collectors.toList()));
    }
}
