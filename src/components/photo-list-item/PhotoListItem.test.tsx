import React from "react";
import { fireEvent, render } from "react-native-testing-library";
import { PhotoListItem } from "./PhotoListItem";

describe("testing ImageListItem component", () => {
  const item = {
    id: "wL6-1GhFHb4",
    created_at: "2019-06-19T06:07:32-04:00",
    updated_at: "2019-06-19T07:25:31-04:00",
    width: 3648,
    height: 5472,
    color: "#C7CECE",
    description: null,
    alt_description: null,
    urls: {
      raw:
        "https://images.unsplash.com/photo-1560938377-304343251c76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc0MzA3fQ",
      full:
        "https://images.unsplash.com/photo-1560938377-304343251c76?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjc0MzA3fQ",
      regular:
        "https://images.unsplash.com/photo-1560938377-304343251c76?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjc0MzA3fQ",
      small:
        "https://images.unsplash.com/photo-1560938377-304343251c76?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc0MzA3fQ",
      thumb:
        "https://images.unsplash.com/photo-1560938377-304343251c76?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjc0MzA3fQ"
    },
    links: {
      self: "https://api.unsplash.com/photos/wL6-1GhFHb4",
      html: "https://unsplash.com/photos/wL6-1GhFHb4",
      download: "https://unsplash.com/photos/wL6-1GhFHb4/download",
      download_location: "https://api.unsplash.com/photos/wL6-1GhFHb4/download"
    },
    categories: [],
    sponsored: false,
    sponsored_by: null,
    sponsored_impressions_id: null,
    likes: 6,
    liked_by_user: false,
    current_user_collections: [],
    user: {
      id: "llhwjUDcoys",
      updated_at: "2019-06-19T07:15:30-04:00",
      username: "srpo",
      name: "Sergio Rodriguez - Portugues del Olmo",
      first_name: "Sergio",
      last_name: "Rodriguez - Portugues del Olmo",
      twitter_username: null,
      portfolio_url: "https://www.instagram.com/s.rpo/",
      bio:
        "Me llamo Sergio, y soy aficionado a la fotografía desde hace unos años. Me gusta viajar y conocer sitios nuevos y fotografiarlos. ",
      location: "Madrid",
      links: {
        self: "https://api.unsplash.com/users/srpo",
        html: "https://unsplash.com/@srpo",
        photos: "https://api.unsplash.com/users/srpo/photos",
        likes: "https://api.unsplash.com/users/srpo/likes",
        portfolio: "https://api.unsplash.com/users/srpo/portfolio",
        following: "https://api.unsplash.com/users/srpo/following",
        followers: "https://api.unsplash.com/users/srpo/followers"
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1545387025125-7024fb02844c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        medium:
          "https://images.unsplash.com/profile-1545387025125-7024fb02844c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        large:
          "https://images.unsplash.com/profile-1545387025125-7024fb02844c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
      },
      instagram_username: "s.rpo",
      total_collections: 16,
      total_likes: 761,
      total_photos: 50,
      accepted_tos: true
    }
  };

  it("should render PhotoListItem", () => {
    const onPress = jest.fn();

    const { getByTestId, debug } = render(
      <PhotoListItem item={item} onPress={onPress} />
    );
    // debug();

    const imgBtn = getByTestId("photo-list-item");

    expect(imgBtn.props).not.toBeNull;
    fireEvent.press(imgBtn);
    expect(onPress).toBeCalled();
    expect(onPress).toBeCalledWith(item.id);
  });
});
